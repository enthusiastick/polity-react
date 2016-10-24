Rails.application.routes.draw do
  root "pages#index"

  get "sign-in", to: "sessions#new", as: :sign_in
  post "sign-in", to: "sessions#create"
  delete "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  namespace :api do
    namespace :v1 do
      get "me", to: "users#show"
    end
  end

  resources :account_confirmations, only: [:edit]
  resources :users, only: [:create, :edit, :update]

  use_doorkeeper
end
