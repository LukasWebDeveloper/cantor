{
    const moneyCurrencyElement = document.querySelector(".js-moneyCurrency");
    const currencyElement = document.querySelector(".js-currency");
    const currentCourseElement = document.querySelector(".js-currentCourse");


    const changeTextCurrency_first = () => {
        if (moneyCurrencyElement.value === "PLN / Złoty") {
            currencyElement.innerText = "euro (EUR)";
        }
        else if (moneyCurrencyElement.value === "EUR / Euro") {
            currencyElement.innerText = "złotych (PLN)";
        }
    }

    const changeTextCurrency_second = () => {
        if (moneyCurrencyElement.value === "PLN / Złoty") {
            currentCourseElement.innerText = "(EUR / PLN)";
        }
        else if (moneyCurrencyElement.value === "EUR / Euro") {
            currentCourseElement.innerText = "(PLN / EUR)";
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const inputPriceElement = document.querySelector(".js-inputPrice");
        const inputCurrentCourseElement = document.querySelector(".js-inputCurrentCourse");
        const finalAmountElement = document.querySelector(".js-finalAmount");

        if (moneyCurrencyElement.value === "PLN / Złoty") {
            finalAmountElement.innerText = ((inputPriceElement.value * 1) / inputCurrentCourseElement.value).toFixed(2) + " €";
        }
        else if (moneyCurrencyElement.value === "EUR / Euro") {
            finalAmountElement.innerText = ((inputPriceElement.value * 1) * inputCurrentCourseElement.value).toFixed(2) + " PLN";
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        moneyCurrencyElement.addEventListener("change", changeTextCurrency_first);
        moneyCurrencyElement.addEventListener("change", changeTextCurrency_second);
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}