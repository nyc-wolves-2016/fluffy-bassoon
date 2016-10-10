Rails.application.routes.draw do

  root 'welcome#index'

  post '/register' => 'user#create'
  get '/login' => 'session#new'
  delete '/logout' => 'session#delete'

  resources :users, except: [:edit, :delete]
  resources :sessions, only: [:new, :create, :delete]
end
