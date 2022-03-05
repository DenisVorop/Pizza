import ContentLoader from "react-content-loader"

//========================================================================================================================================================

const LoadingCard = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="125" cy="125" r="125" />
            <rect x="0" y="260" rx="6" ry="6" width="280" height="25" />
            <rect x="0" y="300" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="410" rx="6" ry="6" width="90" height="27" />
            <rect x="128" y="400" rx="20" ry="20" width="150" height="45" />
        </ContentLoader>
    )
}

//========================================================================================================================================================

export default LoadingCard;
