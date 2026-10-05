# Landing Page Crisal

Site estático (HTML + CSS + JavaScript), sem dependências e sem etapa de build.

## Visualizar
- **VS Code:** `Arquivo > Abrir Pasta...`, instale a extensão **Live Server** e clique com o botão direito em `index.html` > *Open with Live Server*.
- Ou abra `index.html` direto no navegador (as fontes do Google exigem internet; há fontes alternativas).

## Estrutura
- `index.html`: estrutura, SEO (title, description, Open Graph, canonical) e schema LocalBusiness
- `css/style.css`: estilos; as cores ficam em `:root` (tokens)
- `js/data.js`: **todo o conteúdo editável** (soluções, diferenciais, depoimentos, FAQ, contato)
- `js/main.js`: renderização, WhatsApp, analytics, menu, FAQ, mapa sob demanda
- `assets/images/` e `assets/icons/`: imagens e ícones

## O que falta confirmar com a Crisal
1. Em `js/data.js`: trocar os itens `placeholder:true` (soluções e respostas do FAQ) e incluir depoimentos reais e autorizados em `testimonials`.
2. Em `index.html`: trocar o bloco de foto da seção Sobre por uma `<img>` real (com `alt`, `width` e `height`) e adicionar `og:image`.
3. Em `css/style.css`: aplicar as cores oficiais em `:root`.
4. Confirmar o domínio (`canonical` e `og:url`), horários completos e a Política de Privacidade (link atual é `#`).
5. Depois de validar os dados, completar o schema LocalBusiness com horários e categoria.

## Analytics
Os eventos vão para `window.dataLayer` (compatível com Google Tag Manager): `whatsapp_click_*`, `service_card_click`, `phone_click`, `map_click`, `scroll_50`, `scroll_90`. As UTMs da URL são anexadas a cada evento.

## Publicar
Envie o conteúdo da pasta (não o ZIP) para a raiz de um repositório, ou arraste a pasta na Vercel, Netlify ou GitHub Pages.
