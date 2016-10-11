Rails.application.routes.draw do
  post '/register' => 'users#create'
  get '/login' => 'sessions#new'
  get '/profile' => 'users#show'
  delete '/logout' => 'session#destroy'
  post '/boards' => 'boards#index'
  resources :users, except: [:create, :edit, :destroy]
  resources :sessions, only: [:new, :create, :destroy]

  root 'welcome#index'
end
