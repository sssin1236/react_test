const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
const len = arr.length;
const deg = 360/len;

function Panels(){
  return (
    <section>
    {
      arr.map((data,index)=>{
        let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}

        return (
          <article key={index} style={style}>
            <div className="inner">
              <h2>{data}</h2>
            </div>
          </article>
        )
      })
    }
    </section>
  )
}

export default Panels;