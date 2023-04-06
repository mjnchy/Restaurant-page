import "./contact.css";

function createContact() {
    const div = document.createElement('div');
    div.id = 'contact-div';

    function createContactDiv(x) {
        const div = document.createElement('div');
        div.classList.add('contact-div');
        div.id = `contact-${x}`;

        if (x === 'phone') {        
            const h2Location = document.createElement('h2');
            h2Location.id = 'location-header';
            h2Location.textContent = 'You can find us at:';

            const pLoaction = document.createElement('p');
            pLoaction.id = 'location-paragraph';
            pLoaction.textContent = '3294 Wisdom Ln, Ohio, US, 98425';

            div.append(h2Location, pLoaction);

            return div;
        }

        else if (x === 'location') {
            const h2Phone = document.createElement('h2');
            h2Phone.id = 'location-header';
            h2Phone.textContent = 'Or, call us at:';

            const pPhone = document.createElement('p');
            pPhone.id = 'location-paragraph';
            pPhone.textContent = '555-665-2222';

            div.append(h2Phone, pPhone);

            return div;
        }
    };

    function vr() {
        const hr = document.createElement('hr');
        hr.id = 'vertical-line';

        return hr;
    }

    div.append(createContactDiv('phone'));
    div.append(vr());
    div.append(createContactDiv('location'));

    return div;
};

export {
    createContact
}