import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Export } from './Export';

const YourComponent = () => {
    const [totalSumProduct, setTotalSumProduct] = useState(null);
    const router = useRouter();
    const { projectId } = router.query;

    useEffect(() => {
        if (projectId) {
            const totalSumHandler = async () => {
                await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products?populate=*&filters[project][id][$eq]=${projectId}`)
                    .then((res) => {
                        const data = res.data;
                        setTotalSumProduct(data.data);
                    })
            };

            totalSumHandler();
        }
    }, [projectId]);


    let productsTotal = 0;
    if (totalSumProduct && totalSumProduct.length > 0) {
        productsTotal = totalSumProduct.reduce(
            (sum, product) =>
                sum + parseInt(product?.attributes?.quantity) * parseFloat(product?.attributes?.price),
            0
        );
    }

    let vatTotal = 0;
    if (totalSumProduct && totalSumProduct.length > 0) {
        vatTotal = totalSumProduct.reduce(
            (sum, product) => (product?.attributes?.project?.data?.attributes?.vatPercent || 0),
            0
        );
    }


    let unforseenExpenses = 0;
    if (totalSumProduct && totalSumProduct.length > 0) {
        unforseenExpenses = totalSumProduct.reduce(
            (sum, product) => sum + (product?.attributes?.project?.data?.attributes?.unforseenExpenses),
            0
        );
    }

    let service_percentage = 0;
    if (totalSumProduct && totalSumProduct.length > 0) {
        service_percentage = totalSumProduct.reduce(
            (sum, product) => (product?.attributes?.project?.data?.attributes?.service_percentage || 0),

        );
    }

    const totalProductPrice = parseFloat(productsTotal)
    const vatTotalPrice = parseFloat(totalProductPrice) * parseFloat(vatTotal) / (100 + parseFloat(vatTotal));
    const unforseenExpensesPrice = parseFloat(productsTotal) * parseFloat(unforseenExpenses) / 100 + parseFloat(unforseenExpenses)
    const servicePercentagePrice = parseFloat(productsTotal) * parseFloat(service_percentage) / 100 + parseFloat(service_percentage)
    const totalSumPrice = parseFloat(totalProductPrice) + parseFloat(vatTotalPrice) + parseFloat(unforseenExpensesPrice) + parseFloat(servicePercentagePrice)

    return (
        <div>
            <table id="tableId">
                <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                        <th>სამუშაო</th>
                        <th>ერთეული</th>
                        <th>რაოდენობა</th>
                        <th>ჯამი</th>
                    </tr>
                    {totalSumProduct?.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product?.attributes?.categories?.data[0]?.attributes?.title}</td>
                                <td>{product?.attributes?.unit?.data?.attributes?.title}</td>
                                <td>{product?.attributes?.quantity}</td>
                                <td>{product?.attributes?.status ? 'შეძენილია' : 'არ არის შეძენილი'}</td>
                                <td>{`${parseInt(product?.attributes?.quantity) * parseFloat(product?.attributes?.price)} ლარი`}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{`სულ: ${productsTotal.toFixed(2) || 0} ლარი`}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{`დღგ ${parseFloat(vatTotal)}%: ${vatTotalPrice.toFixed(2) || 0} ლარი`}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{`გაუთ.ხარჯი ${parseFloat(unforseenExpenses)}%: ${unforseenExpensesPrice.toFixed(2) || 0} ლარი`}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{`მომსახურეობა ${parseFloat(service_percentage)}%: ${servicePercentagePrice.toFixed(2) || 0} ლარი`}</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{`სულ ჯამი: ${totalSumPrice.toFixed(2) || 0} ლარი`}</td>
                    </tr>
                </thead>
            </table>
            <button onClick={exportToPDF}>Export to PDF</button>
            <button onClick={exportToExcel}>Export to EXCEL</button>
            <Export
                totalSumProduct={totalSumProduct}
                productsTotal={productsTotal}
                vatTotalPrice={vatTotalPrice}
                unforseenExpenses={unforseenExpenses}
                unforseenExpensesPrice={unforseenExpensesPrice}
                service_percentage={service_percentage}
                servicePercentagePrice={servicePercentagePrice}
                totalSumPrice={totalSumPrice}
            />
        </div>

    )
};

export default YourComponent;
