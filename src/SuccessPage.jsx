import { useLocation } from "react-router-dom";

export default function SuccessPage() {
    const location = useLocation();
    const data = location.state;

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0f172a",
                color: "white",
                padding: "50px",
            }}
        >
            <h1>✅ Loan Request Submitted</h1>

            <div
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    background: "#1e293b",
                    borderRadius: "15px",
                }}
            >
                <h2>Client Information</h2>

                <p>Name: {data?.name}</p>
                <p>Phone: {data?.phone}</p>
                <p>Age: {data?.age}</p>
                <p>Country: {data?.Selcet}</p>
                <p>Employee: {data?.IsEmployea ? "Yes" : "No"}</p>
            </div>
        </div>
    );
}