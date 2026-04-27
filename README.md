# 🚀 Web3 Dashboard - Sepolia Testnet

Este é um Dashboard Web3 moderno desenvolvido para interagir com a rede de teste Ethereum Sepolia. O projeto permite que usuários conectem suas carteiras (como MetaMask), visualizem saldos e realizem transferências de tokens em tempo real.

🔗 **Link do Projeto:** [https://meu-dashboard-web3.vercel.app/](https://meu-dashboard-web3.vercel.app/)

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as ferramentas mais atuais do ecossistema Web3:

- **React + Vite**: Para um ambiente de desenvolvimento rápido e otimizado.
- **Wagmi v2**: Biblioteca padrão ouro para hooks React na Ethereum.
- **Viem**: Biblioteca leve para interações de baixo nível com a blockchain.
- **TanStack Query (React Query)**: Gerenciamento de estado assíncrono e cache de dados da rede.
- **TypeScript**: Garantindo maior segurança e tipagem no código.
- **Tailwind CSS**: Para uma interface limpa e responsiva.

## 🚀 Como Funciona

O dashboard se comunica diretamente com a rede **Sepolia**. Ele utiliza provedores de conexão para detectar a extensão da carteira no navegador e gerenciar o ciclo de vida das transações.

### Principais Funcionalidades:
* **Conexão de Carteira**: Suporte nativo para MetaMask e outras carteiras via `injected` connector.
* **Consulta de Saldo**: Busca automática do saldo em SepoliaETH.
* **Transferência**: Interface para envio de frações de ETH para outros endereços, com assinatura via carteira.

---

## 🦊 Como usar o projeto (Guia para Iniciantes)

Para testar as funcionalidades deste dashboard, você precisará de uma carteira digital e moedas de teste. Siga os passos abaixo:

### 1. Instale a MetaMask
Certifique-se de ter a extensão [MetaMask](https://metamask.io/) instalada no seu navegador (Chrome, Brave ou Edge).

### 2. Mude para a Rede Sepolia
O projeto foi configurado para a rede de teste **Sepolia**. No seu MetaMask:
1. Clique no ícone de redes (topo superior esquerdo).
2. Ative a opção "Mostrar redes de teste".
3. Selecione **Sepolia**.

### 3. Obtenha Moedas de Teste (Faucets)
Como este projeto usa "moeda fake" para testes, você não precisa gastar dinheiro real. Você pode conseguir SepoliaETH gratuitamente em:
- [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)

### 4. Conecte e Transfira
1. Clique em **Connect Wallet** no dashboard.
2. Digite o endereço de destino e o valor.
3. Confirme a transação na sua MetaMask.

---

## 💻 Como rodar localmente

Se você quiser clonar este projeto e rodar na sua máquina:

```bash
# Clone o repositório
git clone [https://github.com/masfgroove/meu-dashboard-web3.git](https://github.com/masfgroove/meu-dashboard-web3.git)

# Entre na pasta
cd meu-dashboard-web3

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
