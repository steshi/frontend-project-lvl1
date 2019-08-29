install:
	 npm install
starteven:
	 	 	 npx babel-node src/bin/brain-even.js
startcalc:
			 npx babel-node src/bin/brain-calc.js
startnod:
			 npx babel-node src/bin/brain-nod.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
