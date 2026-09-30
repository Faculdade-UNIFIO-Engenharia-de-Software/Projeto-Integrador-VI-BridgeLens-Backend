# Vision Document - MeshIA
Data Mesh &  Enterprise RAG Plataform
<br>

## Produto

Mesh AI — Sistema de chatbot corporativo baseado em Inteligência Artificial e RAG (Retrieval-Augmented Generation), conectado à base de conhecimento e aos dados reais de uma empresa.

O sistema permite que usuários consultem informações empresariais por meio de perguntas em linguagem natural, reduzindo a necessidade de realizar consultas manuais em diferentes sistemas, planilhas, documentos ou dashboards.

O Mesh AI busca centralizar o acesso ao conhecimento empresarial em uma única interface conversacional, fornecendo respostas contextualizadas a partir das fontes de dados autorizadas para cada usuário.

## Público
O Mesh AI é destinado a colaboradores de empresas que precisam consultar dados e conhecimentos corporativos durante suas atividades diárias, especialmente:

- Gestores, que precisam consultar indicadores e informações para apoiar decisões;

- Analistas, que realizam consultas e análises frequentes sobre dados empresariais;

- Auxiliares e colaboradores operacionais, que precisam localizar informações para executar suas atividades;

- Administradores, responsáveis pela configuração, gerenciamento e controle de acesso ao sistema.

O acesso às informações deve respeitar as permissões e o perfil de cada usuário, evitando que a inteligência artificial disponibilize informações às quais o usuário não possui autorização.

## Objetivo
O objetivo do Mesh AI é reduzir o tempo e a complexidade necessários para encontrar informações dentro de uma organização, permitindo que usuários realizem consultas utilizando linguagem natural.

O sistema pretende:

- Centralizar o acesso ao conhecimento empresarial;
- Permitir consultas por meio de um chatbot;
- Utilizar RAG para recuperar informações relevantes antes da geração da resposta;
- Facilitar a consulta de dados e documentos corporativos;
- Reduzir a dependência de consultas manuais em diferentes fontes;
- Fornecer respostas contextualizadas com base nas informações disponíveis;
- Respeitar as permissões de acesso de cada usuário.

## Limite
Para o escopo inicial do projeto, o Mesh AI terá como foco principal a consulta de informações empresariais por meio de chatbot utilizando RAG.

O sistema não terá como objetivo, inicialmente, substituir completamente sistemas corporativos existentes, ferramentas de BI ou bancos de dados da organização.

Também não faz parte do escopo inicial:

- Automação completa de processos empresariais;
- Criação autônoma de agentes de IA;
E- xecução irrestrita de operações no banco de dados;
- Alteração ou exclusão automática de dados empresariais;
- Implementação completa de governança, LGPD e data lineage;
- Substituição de todas as ferramentas de análise e BI utilizadas pela empresa.

Esses recursos podem fazer parte da evolução futura do produto.


## Necessidades
Para atingir sua proposta, o Mesh AI necessita de:

### Necessidades dos usuários
- Uma interface simples para realizar perguntas em linguagem natural;
- Respostas contextualizadas sobre os dados e conhecimentos da empresa;
- Facilidade para localizar informações sem conhecer a estrutura técnica dos dados;
- Identificação das fontes utilizadas para gerar as respostas;
- Acesso às informações de acordo com o perfil e as permissões do usuário.

### Necessidades do sistema
- Base de conhecimento empresarial;
- Integração com fontes de dados da organização;
- Mecanismo de recuperação de informações utilizando RAG;
- Modelo de linguagem para interpretação das perguntas e geração das respostas;
- Mecanismo de autenticação;
- Controle de autorização e acesso aos dados;
- Isolamento das informações entre usuários e empresas;
- Registro das interações para possibilitar rastreabilidade e evolução do sistema.
