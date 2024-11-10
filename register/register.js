import participantTemplate from "./templates.js";

let participantCount = 2; 

document.getElementById("add2").addEventListener("click", () => {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  document.getElementById("add2").insertAdjacentHTML("beforebegin", newParticipantHTML);
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements]; 
  
    const total = feeElements.reduce((sum, element) => {
      return sum + (parseFloat(element.value) || 0); 
    }, 0);
  
    return total;
  }
  
  
  function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees.toFixed(2)} in Fees.`;
  }
  
 
  function submitForm(event) {
    event.preventDefault(); 
  
    const totalFeesAmount = totalFees(); 
    const adultName = document.getElementById("adult_name").value; 
    const participantCount = document.querySelectorAll("[id^=fname]").length; 
  
    
    document.querySelector("form").style.display = "none";
  
    
    const summaryElement = document.getElementById("summary");
    summaryElement.innerHTML = successTemplate({
      name: adultName,
      participantCount: participantCount,
      totalFees: totalFeesAmount
    });
    summaryElement.style.display = "block"; 
  }
  
  document.querySelector("form").addEventListener("submit", submitForm);