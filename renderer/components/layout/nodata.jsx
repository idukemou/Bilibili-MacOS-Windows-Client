export default function Nodata(props){
    return(
        <>
            <div className="nodata"></div>

            <style jsx>
                {`
                    .nodata{
                      width: 100%;
                      height: 532px;
                      background-image: url("https://s1.hdslb.com/bfs/static/history-record/img/nodata.png");
                      background-size: auto;
                      background-position: center;
                      background-repeat: no-repeat;
                    }
                `}
            </style>
        </>
    )
}