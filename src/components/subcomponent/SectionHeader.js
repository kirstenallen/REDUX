export default function SectionHeader(props) {
return (
  <div key={props.title} className="sectionHeader courier-prime" id={props.title}>
        <p>C:/kallen/{props.title}</p>
  </div>
)
}
