execute pathogen#infect()

" simple remaps
let mapleader = " "
inoremap jk <Esc>
inoremap <Leader>K gt
inoremap <Leader>J gT
nnoremap <Leader>f :NERDTreeToggle<Enter>
map <leader>o o<Esc>k
map <leader>O O<Esc>j
" map <leader>w :w<CR>
nmap <silent> <leader>i "=nr2char(getchar())<cr>P| " allows me to add char at cursor
" actual visual line navigation
nnoremap k gk
nnoremap j gj
nnoremap gk k
nnoremap gj j


" indentation and formatting
:set tw=120
:set ts=2
:set sts=2
:set sw=2
set nocompatible
filetype plugin on
syntax on
" vimwiki
let wiki_1 = {}
let wiki_1.path = '~/vimwiki/'
let wiki_1.syntax = 'markdown'
let wiki_1.ext = '.md'

let g:vimwiki_list = [wiki_1]
let g:vimwiki_ext2syntax = {'.md': 'markdown', '.markdown': 'markdown', '.mdown': 'markdown'}

set rtp+=~/.fzf
