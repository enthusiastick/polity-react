Rails.application.routes.draw do
  root "pages#index"

  get "sign-up", to: "users#new", as: :sign_up
  get "sign-in", to: "sessions#new", as: :sign_in

  resources :account_confirmations, only: [:edit]
  resources :users
end
