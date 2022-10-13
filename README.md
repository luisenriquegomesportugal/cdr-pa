
# CDR-PA

Centro de Desenvolvimento Regional do Pará


## Instalação

Instale o cdr-pa com npm

```bash
git clone https://github.com/luisenriquegomesportugal/cdr-pa.git
cd cdr-pa

npm install
```
    
## Configuraçoes do Firebase 

Faça uma cópia do arquivo `.env.example`, execute 

```bash
cp .env.example .env
```

Você precisará adicionar os valores das seguintes variáveis ​​de ambiente ao seu arquivo `.env`, de acordo com seu console do Firebase
```env
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

## Implantação

Para implantar este projeto, execute

```bash
npm run dev
```


## Servidor

Acesse [http://localhost:4000](http://localhost:4000) 
