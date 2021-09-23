Rails.application.routes.draw do
  resources :produtos
  get 'home/index'
  get 'home/show'
  devise_for :usuarios, controllers: {
    registrations: 'usuarios/registrations',
    sessions: 'usuarios/sessions'
  }
  # rails g channel preco

  get 'consulta_usuario', to: 'application#consulta'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
