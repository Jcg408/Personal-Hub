class Api::QuotesController < ApplicationController

    def index
        render :json => Quote.all
    end

    def create

    end

    def destroy

    end

end