Rails.application.routes.draw do
  resources :chores
  resources :user_chores, only: [:index]

  patch '/chores/:id', to: "chores#update"

  get '/users', to: "users#index"
  post '/signup', to: "users#create"
  get '/me', to: "users#show"

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy" 

  get '/userchores', to: "user_chores#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
