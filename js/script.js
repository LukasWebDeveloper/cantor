{

    const formElement = document.querySelector(".js-form");
    const moneyCurrencyElement = document.querySelector(".js-moneyCurrency");
    const currencyElement = document.querySelector(".js-currency");
    const currentCourseElement = document.querySelector(".js-currentCourse");


    const changeTextCurrency_1 = () => {
        if (moneyCurrencyElement.value === "PLN / Złoty") {
            currencyElement.innerText = "euro (EUR)";
        }
        else if (moneyCurrencyElement.value === "EUR / Euro") {
            currencyElement.innerText = "złotych (PLN)";
        }
    }

    const changeTextCurrency_2 = () => {
        if (moneyCurrencyElement.value === "PLN / Złoty") {
            currentCourseElement.innerText = "(EUR / PLN)";
        }
        else if (moneyCurrencyElement.value === "EUR / Euro") {
            currentCourseElement.innerText = "(PLN / EUR)";
        }
    }

    const calculationsCurrency = (e) => {
        e.preventDefault();
        const inputPriceElement = document.querySelector(".js-inputPrice");
        const inputCurrentCourseElement = document.querySelector(".js-inputCurrentCourse");
        const finalAmountElement = document.querySelector(".js-finalAmount");

        if (moneyCurrencyElement.value === "PLN / Złoty" && currentCourseElement.innerText === "(EUR / PLN)") {
            finalAmountElement.innerText = ((inputPriceElement.value * 1) / inputCurrentCourseElement.value).toFixed(2) + " €";
        }
        else if (moneyCurrencyElement.value === "EUR / Euro" && currentCourseElement.innerText === "(PLN / EUR)") {
            finalAmountElement.innerText = ((inputPriceElement.value * 1) * inputCurrentCourseElement.value).toFixed(2) + " PLN";
        }
    }

    const init = () => {
    moneyCurrencyElement.addEventListener("change", changeTextCurrency_1);
    moneyCurrencyElement.addEventListener("change", changeTextCurrency_2);
    formElement.addEventListener("submit", calculationsCurrency);
    };

    init();
}