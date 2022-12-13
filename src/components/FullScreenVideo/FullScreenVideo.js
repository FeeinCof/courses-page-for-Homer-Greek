import './FullScreenVideo.css';

function FullScreenVideo({src, title, onClick}) {
    return (
        <>
            <div 
                className="FullScreenVideo"
                onClick={() => onClick()}
            >
                <div className="iframeStyle">
                    <iframe src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}

export default FullScreenVideo;