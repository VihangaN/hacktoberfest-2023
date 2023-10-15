import Loader from "./Loader";

const Footer = ({ countryCode, userIP }) => {
    return (
        <>
            {countryCode ? (
                <img
                    src={`https://flagsapi.com/${countryCode}/flat/32.png`}
                />
            ) : (
                <Loader />
            )}
            <div>
                {userIP ? (
                    <>
                        Your IP : &nbsp;<span>{userIP}</span>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        </>
    )
}

export default Footer;