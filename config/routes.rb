Rails.application.routes.draw do
  namespace :api do
    resources :contacts
    resources :photos, except: [:update]
    resources :quotes, except: [:update]
  end
end
