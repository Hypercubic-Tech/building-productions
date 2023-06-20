import Link from "next/link";

const Unauthorized = () => {
    return (
        <div>
            <h1>401 - Unauthorized</h1>
            <p>Sorry, you are not authorized to access this page.</p>
            <Link>Go to main page</Link>
        </div>
    );
};

export default Unauthorized;