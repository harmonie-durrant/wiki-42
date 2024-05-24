export default function ReleaseTag({ version_type, version_number}) {
    return (
        <>
            {
                (version_type == "BETA") ? (<span className="badge badge-lg badge-warning mr-2">BETA</span>)
                : (version_type == "ALPHA") ? (<span className="badge badge-lg badge-info mr-2">ALPHA</span>)
                : (<></>)
            }
            {(version_number) ? (
                <a href={"changelogs/v" + version_number.split('.')[0] + "/" + version_number}>
                    <span className="badge badge-lg badge-info">
                        v{version_number}
                    </span>
                </a>
            ) : (<></>)}
        </>
    )
}
