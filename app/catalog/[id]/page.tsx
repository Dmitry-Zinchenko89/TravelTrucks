interface CamperDetailsProps {
    params: { id: string };
}

export default function CamperDetails({ params }: CamperDetailsProps) {
    return (
        <div style={{ padding: "64px" }}>
            <h1>Camper details page</h1>
            <p>Camper ID: {params.id}</p>
        </div>
    );
}
