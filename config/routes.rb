Rails.application.routes.draw do
  resources :user_chores
  resources :chores
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  # get '/hello', to: 'application#hello_world'

  get '/test', to: 'chores#index'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
