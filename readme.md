## Dashboard de Gestão de Campanhas de Marketing para Frontend: 

**Introdução**

Este guia detalhado te ajudará a compreender o Dashboard de Gestão de Campanhas de Marketing. Abordaremos cada arquivo e sua função, com foco em como o frontend interage com eles para visualizar e gerenciar as campanhas.


**Modelos:**

- **Campanha:** Armazena informações básicas da campanha, como nome, tipo, objetivo, responsável, equipe e data final.
- **TipoCampanha:** Registra os diferentes tipos de campanhas (fidelização, lançamento, etc.).
- **ContaInstagram:** Contém as credenciais e informações da conta do Instagram.
- **PublicacaoInstagram:** Registra cada postagem agendada ou publicada no Instagram, incluindo imagem, legenda, data e hora.


**Templatesa serem adicionados ao centro da tela Dashboard:(Os arquivos HTML podem ser adicionados via JavaScript)**

- **home.html:** Define a estrutura da tela inicial.
- **login.html:** Define o layout do formulário de login.
- **registro.html:** Define o layout do formulário de registro.
- **dashboard.html:** Define a estrutura da tela principal do dashboard.
- **criar_campanha.html:** Define o layout do formulário de criação de campanhas.
- **listar_campanhas.html:** Define a estrutura da tabela com a lista de campanhas.
- **exibir_campanha.html:** Define o layout da página com os detalhes da campanha.
- **logar_conta_instagram.html:** Define o layout do formulário de login da conta do Instagram.

**Funcionalidades para o Frontend:**

- **Criar Campanhas:**
    - Limpa o centro do dashboard e insere o formulário de criação de campanhas.
    - Permite a seleção do tipo de campanha (ex: fidelização) através de um menu suspenso.
    - Inclui campos para nome, objetivo, responsável, equipe, data final e descrição da campanha.
    - Envia os dados do formulário para a view de criação de campanhas.

- **Criar Tipo Campanha:**
    - Abre um pop-up com um formulário simples para registrar um novo tipo de campanha.
    - Inclui campos para nome e descrição do tipo de campanha.
    - Envia os dados do formulário para a view de criação de tipos de campanhas.
    - Após o salvamento, o novo tipo de campanha é adicionado ao menu suspenso no formulário de criação de campanhas.

- **Exibir Lista de Campanhas:**
    - Limpa o centro do dashboard e insere uma tabela com a lista de todas as campanhas.
    - A tabela exibe informações como nome, tipo, status, data final e responsável de cada campanha.
    - Permite a pesquisa e filtragem de campanhas por diversos critérios.
    - Clica em uma campanha para visualizar seus detalhes.

- **Exibir Campanha Específica:**
    - Limpa o centro do dashboard e exibe os detalhes da campanha selecionada.
    - Mostra informações como nome, tipo, objetivo, responsável, equipe, data final, descrição, status e histórico da campanha.
    - Permite a edição da campanha e a visualização das publicações agendadas no Instagram.

- **Logar Conta Instagram:**
    - Limpa o centro do dashboard e apresenta um formulário para inserir o username, senha e empresa da conta do Instagram.
    - Envia os dados do formulário para a view de login da conta do Instagram.
    - Após o login, a conta é conectada ao sistema e as publicações podem ser gerenciadas.


## Funções Adicionais para o Dashboard de Gestão de Campanhas de Marketing:

**Gerenciamento Avançado de Campanhas:**

- **Criar Segmentação Personalizada:** Definir públicos específicos para cada campanha com base em critérios como idade, localização, interesses e comportamento online.
- **Acompanhamento de Resultados em Tempo Real:** Monitorar o desempenho das campanhas em tempo real, com métricas como taxa de cliques, engajamento e conversões.
- **Testes A/B e Otimização:** Realizar testes A/B para diferentes elementos da campanha (imagens, textos, calls to action) e otimizar o desempenho com base em dados concretos.
- **Automação de Tarefas:** Automatizar tarefas repetitivas como envio de emails, agendamento de posts e geração de relatórios.


**Gestão de Redes Sociais Integrada:**

- **Agendamento de Publicações:** Agendar e publicar posts em diversas redes sociais diretamente do dashboard.
- **Monitoramento de Métricas:** Monitorar as métricas de desempenho das redes sociais em tempo real.
- **Análise de Sentimento:** Analisar o sentimento das menções à marca nas redes sociais e identificar oportunidades de melhoria.
- **Gerenciamento de Crises:** Gerenciar crises de forma rápida e eficiente através do monitoramento e da comunicação estratégica nas redes sociais.

**Outras Funções Úteis:**

- **Gerenciamento de Permissões:** Controlar o acesso às diferentes campanhas para diferentes usuários.
- **Histórico Completo de Campanhas:** Armazenar e consultar o histórico completo de todas as campanhas realizadas.

**Lembre-se:**

Essas são apenas algumas sugestões de funções adicionais que podem ser implementadas no Dashboard de Gestão de Campanhas de Marketing. As funcionalidades específicas a serem desenvolvidas dependerão das necessidades e objetivos específicos da sua empresa.




## Variações de Formulário para Dados de Campanha e Instagram

Este documento apresenta as variáveis utilizadas nos formulários do Dashboard de Gestão de Campanhas de Marketing, detalhando seus tipos e formatos de exibição.

**Dados Tipo Campanha :**

- **text (CharField):** Texto curto para definir o tipo de campanha (ex: Fidelização, Lançamento). Formulário: **input** (texto).

**Dados da Campanha :**

- **emprise (ForeignKey):** Seleção da empresa associada à campanha. Formulário: **select** (com opções baseadas no modelo Emprise).
- **types (ManyToManyField):** Seleção de um ou mais tipos de campanha vinculados. Formulário: **select multiple** (com opções baseadas no modelo CampaignType).
- **name (CharField):** Nome da campanha. Formulário: **input** (texto).
- **responsible (ForeignKey):** Seleção do usuário responsável pela campanha. Formulário: **select** (com opções baseadas no modelo Worker).
- **workers (ManyToManyField):** Seleção de um ou mais usuários envolvidos na campanha. Formulário: **select multiple** (com opções baseadas no modelo Worker).
- **goal (TextField):** Descrição do objetivo da campanha. Formulário: **textarea** (texto multi-linha).
- **desc (TextField):** Descrição geral da campanha. Formulário: **textarea** (texto multi-linha).
- **end_s (DateTimeField):** Data e hora final prevista para a campanha. Formulário: **calendario** (seleção de data e hora).

**Conta do Instagram :**

- **emprise (ForeignKey, opcional):** Seleção da empresa associada à conta (pode ser deixado em branco). Formulário: **select** (com opções baseadas no modelo Emprise) ou **opcional** (sem campo no formulário).
- **username (CharField):** Nome de usuário da conta do Instagram. Formulário: **input** (texto).
- **password (BinaryField, opcional):** Senha da conta do Instagram (armazenada de forma segura). Formulário: **password** (campo para entrada oculta).

**Publicação Instagram :**

- **acc (ForeignKey):** Seleção da conta do Instagram associada à publicação. Formulário: **select** (com opções baseadas na Conta do Instagram do usuário logado).
- **campanha (ForeignKey):** Seleção do campanha associada à publicação. Formulário: **select** (com opções baseadas nas Campanhas e auto-selecionado a campanha atual que o usuario esta).
- **image (ImageField):** Upload da imagem para a publicação. Formulário: **file upload** (seleção de imagem).
- **desc (TextField):** Legenda da publicação do Instagram. Formulário: **textarea** (texto multi-linha).
- **scheduled_data (DateTimeField, opcional):** Data e hora agendada para publicação (pode ser deixado em branco). Formulário: **calendario** (seleção de data e hora) ou **opcional** (sem campo no formulário).

**Observações:**

- Os tipos de formulário (`input`, `select`, `textarea`, etc.) são sugestões e podem ser adaptados de acordo com a interface desejada.
- Alguns campos possuem valores opcionais, indicados na descrição.
- A senha do Instagram deve ser armazenada de forma segura, utilizando técnicas de hash e evitando armazenamento em texto plano.

Espero que esta informação seja útil!