export default function dateHourWorking() {
  const liWorkingTime = document.querySelector("[data-week]");
  const workingDays = liWorkingTime
    .getAttribute("data-week")
    .split(",")
    .map(Number);
  const workingHours = liWorkingTime
    .getAttribute("data-hour")
    .split(",")
    .map(Number);

  const now = new Date();
  const dayNow = now.getDay();
  const isOpenDay = workingDays.includes(dayNow);

  const hourNow = now.getHours();
  const openingHour = workingHours[0];
  const closingHour = workingHours[1];
  const isOpenHour = hourNow >= openingHour && hourNow < closingHour;

  const companyIsOpen = isOpenDay && isOpenHour;

  if (companyIsOpen) {
    liWorkingTime.classList.add("open-now");
    liWorkingTime.title = "Estamos Abertos!";
  } else {
    liWorkingTime.classList.add("closed-now");
    liWorkingTime.title = "Estamos fechados :(";
  }
}
