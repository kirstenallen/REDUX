export default function SectionHeader(props) {
return (
  <div key={props.title} className="sectionHeader courier-prime " id={props.title}>
        <p>{props.title}</p>
  </div>
)
}
