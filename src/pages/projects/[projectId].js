import Project from "@/components/projects/Project";
import axiosInstance from "@/api/axios";

const res = [
    {
        addres: 'wereteli 112',
        _id: 'rame',
        m2: '40m2',
        type: 'bina',
        time: '29.03.2023 - 29.05.2023',
        status: 'shavi'
    },
    {
        addres: 'wereteli 112',
        _id: 'rume',
        m2: '40m2',
        type: 'bina',
        time: '29.03.2023 - 29.05.2023',
        status: 'shavi'
    },
    {
        addres: 'wereteli 112',
        _id: 'rome',
        m2: '40m2',
        type: 'bina',
        time: '29.03.2023 - 29.05.2023',
        status: 'shavi'
    }
];

const productsData = [
    {
        title: 'სადენი მრავალწვერიანი 3X2.5',
        address: '',
        seler: 'გორგია',
        unit: 'ცალი',
        price: 3.5,
        quantity: 34,
        total: 50,
        img: "assets/media/avatars/150-1.png"
    }
];

export const getStaticPaths = async () => {
    // const res = await axiosInstance.get("/api/admin/get_projects");

    let paths = [];
    if (res.length) {
        paths = res?.map((item) => {
            return {
                params: { projectId: item?._id },
            };
        });
    }
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const projectId = params.projectId || undefined;
    // const res = await axiosInstance.get("/api/admin/get_projects");

    const pr = res?.filter(item => {
        if (item._id === projectId) return item;
    })

    return {
        props: {
            pr
        }
    };
};

const index = ({ pr }) => {
    return <Project pr={pr} />;
};

export default index;