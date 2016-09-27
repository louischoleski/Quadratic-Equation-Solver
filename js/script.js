function quadraticEquationSolver(){
	// 0. Variables allocation.
	var a = document.getElementById("myForm").elements[0].value;
	var b = document.getElementById("myForm").elements[1].value;
	var c = document.getElementById("myForm").elements[2].value;
	var d = document.getElementById("myForm").elements[3].value;
	var x1 = 0, x2 = 0;
	// Equation form fix: make sure d = 0.
	if (d !=0){c = c - d;} 
	// 1. Computation of delta.
	var delta = (b*b)-(4*a*c);
	// 2. Evaluation of delta.
	if (delta <  0){
		alert('No solution');
	}
	else if (delta == 0){
		x1 = -b/2*a;
		alert('There is one solution: ' + x1);
	
	}
	else if (delta > 0) {
		x1 = (-b + Math.sqrt(delta))/2*a;	
		x2 = (-b - Math.sqrt(delta))/2*a;	
		alert('There is two solutions: (' + x2 +', ' + x1 + ') ' );
	}
}
