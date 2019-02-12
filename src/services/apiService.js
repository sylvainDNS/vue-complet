export const fetchWp = (domain, id) => {
  return new Promise((resolve) => {
    fetch('http://' + domain + '/wp-json/wp/v2/posts/' + id).then((resp) =>
      resolve(resp.json())
    )
  })
}
