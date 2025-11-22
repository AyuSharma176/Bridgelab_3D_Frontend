// Q4 code placeholder
// Q4: Custom Form Builder

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    generateForm(containerId) {
        const container = document.getElementById(containerId);

        let html = "<form id='dynamicForm'>";
        this.fields.forEach(field => {
            html += `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.label}" />
                <br><br>
            `;
        });
        html += `<button type="button" onclick="getFormData()">Submit</button>`;
        html += "</form>";

        container.innerHTML = html;
    }
}

function getFormData() {
    const inputs = document.querySelectorAll("#dynamicForm input");
    const data = {};

    inputs.forEach(input => {
        data[input.id] = input.value;
    });

    console.log("Form Data:", data);
}

const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

// form.generateForm("formContainer");
