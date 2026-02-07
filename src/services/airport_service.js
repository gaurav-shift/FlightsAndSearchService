const CrudService = require('./crud_service');
const { AirportRepository } = require('../repository/airport_repository');
class AirportService extends CrudService {
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;