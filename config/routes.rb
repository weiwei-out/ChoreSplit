Rails.application.routes.draw do
  resources :chores, only: [:index, :create, :destroy]
  # resources :user_chores, only: [:index]

  get '/users', to: "users#index"
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  
  # post '/login', to: "sessions#create"
  # delete '/logout', to: "sessions#destroy" 

  get 'userchores', to: "user_chores#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
