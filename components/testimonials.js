import data from "../data/data-testimonials.json";

export default function Testimonials(){
    console.log(data)
    return (
        <div className="testimonials">
            <h1>Client Testimonials</h1>
            {data.map(item => (
                <div>
                    <img src={item.avatar} alt="" />
                    <p>{item.legend}</p>
                    <h3>{item.name}</h3>
                    <p className="position">{item.position}</p>
                </div>
            ))}
        </div>
    )
}