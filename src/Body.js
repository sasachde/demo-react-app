
function Body(text) {
    console.log(text);
    const bodyHtml = (
        <p>{text.text}</p>
    )
    return bodyHtml;
}

export default Body;