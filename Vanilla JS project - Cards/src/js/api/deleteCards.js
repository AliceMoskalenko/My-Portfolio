export async function getAllCards(){
  let token = localStorage.getItem("token");

  let getCards = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }).then((response) => response.json()) 
  .then((response) => DeleteAllCards(response))
} 

export function DeleteAllCards(cards) {
  console.log(cards);
  console.log(1);
   let token = localStorage.getItem("token");
   if(cards.length !== 0){
      cards.forEach(element => {
        fetch(`https://ajax.test-danit.com/api/v2/cards/${element.id}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`}
        })
      })
    };
   
}
