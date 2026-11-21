# Ficha de Dados Graduados

Ficha de personagem em dados graduados (d4 a d12), feita para usar no celular na horizontal.
Funciona como site e também pode ser instalada como app (abre em tela cheia e funciona sem internet).

## Publicar no GitHub Pages

1. No GitHub, crie um repositório **público** (por exemplo, `ficha`). No plano gratuito, o GitHub Pages só funciona em repositório público.
2. No repositório, clique em **Add file → Upload files** e arraste **todo o conteúdo desta pasta**, com as pastas `fonts` e `icons` junto. Depois clique em **Commit changes**.
3. Vá em **Settings → Pages**. Em **Build and deployment**, escolha **Source: Deploy from a branch**, depois **Branch: main** e a pasta **/ (root)**, e clique em **Save**.
4. Espere cerca de 1 minuto. O endereço aparece no topo da mesma tela, no formato `https://SEU-USUARIO.github.io/ficha/`.

## Instalar como app no celular

- **Android (Chrome):** abra o endereço, toque em **☰ → Instalar app**. Se o botão não aparecer, use o menu **⋮ → Instalar app** (ou **Adicionar à tela inicial**).
- **iPhone (Safari):** abra o endereço, toque em **Compartilhar** e depois em **Adicionar à Tela de Início**.

Instalado, o app abre em tela cheia e na horizontal. No navegador, com o celular em pé, a ficha gira sozinha: é só virar o aparelho.

## Onde ficam as fichas

As fichas e os retratos ficam salvos **no próprio aparelho**, dentro do navegador ou do app.
Para levar uma ficha para outro celular, ou guardar uma cópia, use **☰ → Exportar ficha**: o arquivo `.ficha.json` sai com o retrato junto.
No outro aparelho, use **☰ → Importar ficha**.

Se o navegador apagar os dados do site (limpeza de cache ou de dados), as fichas somem. Exporte de vez em quando.

## Como usar

- **Dados:** toque para subir um passo; segure o dedo (ou use o botão direito no computador) para descer.
- **Perfil:** toque para alternar entre Executor, Analista e Vigilante. O Analista tem **Análise** (4 pontos) no lugar de **Ímpeto** (3 pontos). O contador aparece quando alguma habilidade cita a palavra.
- **PV:** mostra atual/máximo (ex.: `7/10`). A foto do personagem muda sozinha conforme a vida: **Saudável** acima da metade, **Machucado** na metade ou abaixo, **Morto** com 0 PV.
- **Fotos:** as três miniaturas no canto do retrato são Saudável, Machucado e Morto. Toque numa vazia para escolher a foto; toque numa preenchida para ver como ela fica (o botão **Voltar ao automático** volta para a foto da vida atual). Faltando a foto de Machucado, a ficha usa a de Saudável; faltando a de Morto, usa a anterior em preto e branco.
- **Imagem com os 3 estados lado a lado:** escolha a imagem inteira e toque em **Separar nos 3**. A ficha divide nos vãos entre os personagens, apaga fundo branco liso, corta as sobras e deixa os três na mesma posição. Fundo transparente também funciona.
- **Tamanho da foto:** o controle **− 100% +** muda o tamanho da foto que está aparecendo; o **×** remove essa foto.
- **Tema:** ☰ → cinco cores, com fundo preto ou branco. Cada ficha guarda o próprio tema.

## Atualizar o site

Substitua os arquivos no repositório pelos novos. A página busca a versão nova sozinha quando o celular está com internet.
Se mudar fontes ou ícones, aumente o número de `VERSION` no começo do `sw.js` (ex.: `ficha-v2`) para o app trocar os arquivos guardados.

## Ícones e telas de abertura

- **Android:** ícones de 48 a 512 px em três versões: normal (`icon-*`), adaptável (`maskable-*`, que o Android recorta em círculo, gota ou quadrado sem cortar o desenho) e monocromática (`monochrome-*`, para os ícones temáticos do Android 13 ou mais novo). O print em `screenshots/` aparece na janela de instalação do Chrome.
- **iPhone e iPad:** ícone da tela de início em todos os tamanhos (57 a 180 px, e 1024 px) e telas de abertura do app instalado para cada modelo, em pé e deitado: do iPhone 5s/SE ao iPhone 18 Pro Max e iPhone Air, e do iPad mini ao iPad Pro 13". O iPhone Duo (dobrável) ainda não tem medidas publicadas; nele o app abre sem tela de abertura, direto na ficha.
- **Navegador:** `favicon.ico` e favicons de 16, 32, 48 e 96 px.

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `index.html` | A ficha inteira (visual e funcionamento) |
| `manifest.webmanifest` | Nome, ícones, print e orientação do app instalado |
| `sw.js` | Guarda o app no aparelho para funcionar sem internet |
| `favicon.ico` | Ícone da aba do navegador |
| `icons/` | Favicons e `apple-touch-icon.png` |
| `icons/android/` | Ícones do Android: normal, adaptável e monocromático |
| `icons/ios/` | Ícones da tela de início do iPhone e iPad |
| `splash/` | Telas de abertura do iPhone e iPad (44 imagens) |
| `screenshots/` | Print mostrado na instalação pelo Chrome |
| `fonts/` | Fontes IM Fell English e Alegreya Sans, licença SIL Open Font License (textos da licença na pasta) |
| `.nojekyll` | Avisa o GitHub Pages para publicar os arquivos como estão |
