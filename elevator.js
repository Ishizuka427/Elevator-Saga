{
    init: function(elevators, floors) {
        var elevator0 = elevators[0]; // Let's use the first elevator
	var elevator1 = elevators[1];
        
        _.each(floors, function(floor) {
            floor.on("up_button_pressed down_button_pressed", function() {
                elevator0.goToFloor(floor.floorNum());
            });
        });
        elevator0.on("floor_button_pressed", function(floorNum) {
            elevator0.goToFloor(floorNum);
        });
        if(elevator0.goingUpIndicator()) {
            elevator0.goingDownIndicator(true);
        }
	
        _.each(floors, function(floor) {
            floor.on("up_button_pressed down_button_pressed", function() {
                elevator1.goToFloor(floor.floorNum());
            });
        });
        elevator1.on("floor_button_pressed", function(floorNum) {
            elevator1.goToFloor(floorNum);
        });
        if(elevator1.goingUpIndicator()) {
            elevator1.goingDownIndicator(true);
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
