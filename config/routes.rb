Rails.application.routes.draw do
  post '/register' => 'users#create'
  post '/login' => 'sessions#create'
  get '/profile' => 'users#show'
  get '/logout' => 'sessions#destroy'
  post '/boards' => 'boards#index'
  post '/users' => 'users#create'
  resources :users, except: [:create, :edit, :destroy]
  resources :sessions, only: [:new, :create, :destroy]

  root 'welcome#index'
end
