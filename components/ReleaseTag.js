export default function ReleaseTag({ version_type, version_number}) {
    if (version_type == "BETA")
    {
        return (
            <>
                <span class="badge badge-lg badge-warning mr-2">BETA</span>
                <span class="badge badge-lg badge-info">v{version_number}</span>
            </>
        )
    }
    if (version_type == "ALPHA")
    {
        return (
            <>
                <span class="badge badge-lg badge-info mr-2">ALPHA</span>
                <span class="badge badge-lg badge-info">v{version_number}</span>
            </>
        )
    }
    if (version_type == "RELEASE")
    {
        return (
            <>
                <span class="badge badge-lg badge-success mr-2">RELEASE</span>
                <span class="badge badge-lg badge-info">v{version_number}</span>
            </>
        )
    }
}