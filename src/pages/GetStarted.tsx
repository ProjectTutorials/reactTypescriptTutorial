interface Props{
    head?: string;
    subText?: string
}

const GetStarted = ({head, subText}: Props) => {
  return (
    <div style={{marginTop:"85px"}} className="noSelect">
        <h1 style={{textAlign:"center"}}>Get Started</h1>
        <div className="mainSection">
            <div className="subSection">
                <h1>{head}</h1>
                <p style={{userSelect:"all"}}>{subText}</p>
            </div>
        </div>
    </div>
  )
}

export default GetStarted