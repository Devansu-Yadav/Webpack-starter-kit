import Logo from "../logo.svg";

const ToolkitInfo = () => {
    return(
        <>
            <img src={Logo} loading="lazy" alt='tool icon' />
            <h2> learning web tooling today </h2>
        </>
    );
};

export default ToolkitInfo;