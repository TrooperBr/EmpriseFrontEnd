class DashboardManager {
    constructor(dashboardId) {
        this.dashboard = document.getElementById(dashboardId);
        this.widgets = [];
    }

    addWidget(widgetId, content) {
        const widget = document.createElement("div");
        widget.className = "widget";
        widget.id = widgetId;
        widget.innerHTML = content;
        this.widgets.push(widget);
        this.dashboard.appendChild(widget);

        this.addControls(widget);
    }

    addControls(widget) {
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "Fechar";
        closeButton.addEventListener("click", function() {
            widget.style.display = "none";
        });

        const minimizeButton = document.createElement("button");
        minimizeButton.innerHTML = "Minimizar";
        minimizeButton.addEventListener("click", function() {
            widget.classList.toggle("minimized");
        });

        widget.appendChild(closeButton);
        widget.appendChild(minimizeButton);
    }
}




class JsonRequester {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchJsonData() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    }

    async processJsonData(data, dashboardManager) {
        if (data && Array.isArray(data.widgets)) {
            data.widgets.forEach(widgetData => {
                const { id, template, append_to } = widgetData;
                const content = this.getTemplateContent(template);
                dashboardManager.addWidget(id, content, append_to);
            });
        }
    }

    getTemplateContent(template) {
        // Aqui você pode implementar lógica para obter o conteúdo do template
        // com base no nome do template (por exemplo, fazer outra requisição ao backend)
        // Neste exemplo, estou usando um switch simples.
        switch (template) {
            case "html-index":
                return "<h2>HTML Index Template</h2><p>Conteúdo do HTML Index Template</p>";
            // Adicione mais cases conforme necessário para outros templates
            default:
                return "<p>Template padrão</p>";
        }
    }
}

document.addEventListener("DOMContentLoaded", async function() {
    const apiUrl = "URL_DO_SEU_BACKEND"; // Substitua pela URL real do seu backend
    const dashboardManager = new DashboardManager("dashboard");
    const jsonRequester = new JsonRequester(apiUrl);

    // Fazer requisição JSON
    const jsonData = await jsonRequester.fetchJsonData();

    // Processar os dados JSON e adicionar widgets ao dashboard
    await jsonRequester.processJsonData(jsonData, dashboardManager);
});

```
// Exemplo de uso
const dashboardManager = new DashboardManager();

// Adiciona partes do template à lista
dashboardManager.adicionarParteTemplate('Conteúdo da Parte 1');
dashboardManager.adicionarParteTemplate('Conteúdo da Parte 2');
dashboardManager.adicionarParteTemplate('Conteúdo da Parte 3');

// Indexa as partes do template na div com id "dashboard"
dashboardManager.indexarNoDashboard();
```





