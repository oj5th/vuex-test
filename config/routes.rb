Rails.application.routes.draw do
  resources :products, only: %i[index show]

  namespace :api do
    resources :comments, only: :destroy

    resources :products, only: [] do
      resources :comments, only: :create
    end
  end

  root 'products#index'
end
