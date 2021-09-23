class ApplicationController < ActionController::Base
    def consulta
        respond_to {|f| f.json {render json: {:email => 'jeovan.farias@gmail.com'}}}
    end
end
