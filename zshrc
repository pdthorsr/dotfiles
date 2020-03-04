# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
#
~/.fehbg &

# Path to your oh-my-zsh installation.
export ZSH="/home/m88614/.oh-my-zsh"
export NOMAD_ADDR='http://m88614-blue-nomadserver-001.node.green.intern.minerva.loc:4646/'

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git thefuck colored-man-pages)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/home/m88614/.sdkman"
[[ -s "/home/m88614/.sdkman/bin/sdkman-init.sh" ]] && source "/home/m88614/.sdkman/bin/sdkman-init.sh"



prov() {
	cd '/home/m88614/IdeaProjects/Minerva/minerva/docker/provisioner'
	docker-compose run minerva-provisioner
}

des() {
  docker exec -it $1 /bin/sh
}

de() {
  docker exec $1 $2
}

alias min='cd /home/m88614/IdeaProjects/Minerva/minerva/'
alias mincon='cd /home/m88614/IdeaProjects/Minerva/minerva-config/'
alias dpp='cd /home/m88614/IdeaProjects/dataprep-plattform/'
alias provdir='cd /home/m88614/IdeaProjects/Minerva/minerva/docker/provisioner'
alias gp='git push'
alias ga='git add -A'
alias dl='docker image ls'
alias dp='docker ps'
alias dpa='docker ps -a'
alias tf='terraform'
alias gs='git status'
alias dev='sh /home/m88614/.dotfiles/scripts/mindevelop.sh'
alias sb='sh /home/m88614/.dotfiles/scripts/switchbranches.sh'
alias br='sh /home/m88614/.dotfiles/scripts/print_branches.sh'
alias fbr='sh /home/m88614/.dotfiles/scripts/fbr.sh'
alias ct='consul-template'

upd() {
	tmpdir=$(pwd)
  echo 'Updating minerva'
  min
  git pull
  echo '\nUpdating minerva-config'
  mincon
  git pull
  cd $tmpdir
}

# dev() {
# 	tmpdir=$(pwd)
#   echo 'Changing to minerva to develop'
#   min
#   git checkout develop
#   echo '\nChanging to minerva to develop'
#   mincon
#   git checkout develop
#   cd $tmpdir
# }

doc() {
	vim /home/m88614/vimwiki/index.md
}


eval $(thefuck --alias)

export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin

