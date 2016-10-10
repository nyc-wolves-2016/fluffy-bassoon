Rails.application.routes.draw do
  get '/register' => 'users#new'
  get '/login' => 'sessions#new'
  get '/profile' => 'users#show'
  delete '/logout' => 'session#destroy'

  resources :users, except: [:edit, :destroy]
  resources :sessions, only: [:new, :create, :destroy]

  root 'welcome#index'
end
