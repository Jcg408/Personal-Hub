class Api::PhotosController< ApplicationController
    def index
        render :json => Photo.all
    end

    def create
    
    end

  

    def destroy
    
    end
end